import React, { useEffect, useRef, useState } from 'react'
import {Task} from '../Context'

interface TaskModalProps {
  task: Task | null
  onClose: () => void
}

const TaskModal: React.FC<TaskModalProps> = ({ task, onClose}) => {

  const [subtasks, setSubtasks] = useState<Task['subtasks']>(task?.subtasks || [])

  const handleSubtaskToggle = (index:number) => {
    const updatedSubtasks = [...subtasks]
    updatedSubtasks[index].isCompleted = !updatedSubtasks[index].isCompleted
    setSubtasks(updatedSubtasks)
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('modal-background')) {
        onClose()
      }
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  return (
    <div className='absolute inset-0 flex justify-center items-center px-4 bg-black/50 modal-background'>
      <div className='bg-white rounded-md p-6 w-full flex flex-col gap-6'>
        
        <div className='flex justify-between items-center'>
          <h2 className='text-[18px] font-bold'>{task?.title}</h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20" fill="none">
          <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3"/>
          <circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3"/>
          <circle cx="2.30769" cy="17.6925" r="2.30769" fill="#828FA3"/>
          </svg>
        </div>

        {task?.description && (
          <p className='text-[13px] text-mediumGrey font-medium leading-6'>{task.description}</p>
        )}

        <div className='flex flex-col gap-4'>
          <h3 className='text-[12px] text-mediumGrey font-bold'>Subtask (<span></span>)</h3>
          <div className='flex flex-col gap-2'>
            {task?.subtasks.map((subtask, idx) => (
              <div 
                key={idx}
                className='text-black text-[12px] font-bold flex gap-8 bg-lightGrey py-5 px-3'
                onClick={() => handleSubtaskToggle(idx)}
                >
                {subtask.isCompleted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect width="16" height="16" rx="2" fill="#635FC7"/>
                  <path d="M4.27583 8.0658L7.03229 10.8223L12.0323 5.82227" stroke="white" stroke-width="2"/>
                </svg>
                ) : (
                  <div className='bg-white rounded-sm border border-mediumGrey h-4 w-4'/>
                )}
                <p className=''>{subtask.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default TaskModal