import React, {FunctionComponent, useCallback} from "react";
import Image from "next/image";
import IconClose from '../../../common/assets/icon-cross.svg';
import IconCross from '../../../common/assets/icon-check.svg';
import {Todo} from "../../../common/types/todo.interface";
import {removeTodo, changeTodoStatus} from "../store/thunk";
import {useAppDispatch} from "../../../common/hooks/useStore";

interface ItemCardProps {
  todo: Todo;
}

const ItemCard: FunctionComponent<ItemCardProps> = (
    {
        todo
    }
) => {
  const dispatch = useAppDispatch();

  const renderStatusButton = useCallback(() => {
    const defaultStyling = 'w-7 h-7 border rounded-full';

    const handleChangeTodoStatus = async () => {
      try {
        await dispatch(changeTodoStatus(todo));
      } catch (e) {
        console.error(e);
      }
    }

    if (todo.completed) {
      return (
          <button className="w-7 h-7 border rounded-full bg-[#000]" onClick={() => handleChangeTodoStatus()}>
            <Image src={IconCross} alt={"IconCross"} width={11} height={9}/>
          </button>
      )
    }

    return (
        <button className={defaultStyling} onClick={() => handleChangeTodoStatus()}></button>
    )
  }, [todo.completed])

  const renderName = useCallback(() => {
    const defaultStyling = 'ml-4';
    if (todo.completed) {
      return (
          <p className={`${defaultStyling} line-through opacity-30`}>{todo.content}</p>
      )
    }

    return (
        <p className={defaultStyling}>{todo.content}</p>
    )
  }, [todo.completed])

  const handleRemoveTodo = async () => {
    try {
      await dispatch(removeTodo(todo.uuid));
    } catch (e) {
      console.error(e)
    }
  }

  return (
      <div className="flex justify-between items-center p-5 border-b">
        <div className="flex align-middle">
          {renderStatusButton()}
          {renderName()}
        </div>
        <button onClick={() => handleRemoveTodo()}>
          <Image src={IconClose} alt="IconClose" width={18} height={18}/>
        </button>
      </div>
  )
}

export default ItemCard;
