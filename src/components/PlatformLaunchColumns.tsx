import { useContext, useState } from 'react'
import { Context } from '../Context'
import TaskModal from './TaskModal'

const PlatformLaunchColumns = () => {

  const contextValues = useContext(Context)

  if (!contextValues) {
    return null
  }
  const {kanbanData, Task} = contextValues

  const platformLaunchBoard = kanbanData.boards.find((board) => board.name === 'Platform Launch')
  
  const todoObject = platformLaunchBoard?.columns.find((column) => column.name === 'Todo')

  const [selectedTask, setSelectedTask] = useState<typeof Task | null>(null)
  console.log(selectedTask)
  const handleTaskClick = (task: typeof Task) => {
    setSelectedTask(task)
  }
  const handleCloseModal = () => {
    setSelectedTask(null)
  }
  return (
    <>
      <div className='pl-4 pt-6'>
        <div className='flex items-center gap-3 mb-6'>
          <svg xmlns="http://www.w3.org/2000/svg"       width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="7.5" cy="7.5" r="7.5" fill="#49C4E5"/>
          </svg>
          <h3 className='text-[12px] font-bold tracking-[2.4px] uppercase text-mediumGrey'>todo (<span>{todoObject?.tasks.length})</span></h3>
        </div>
        <div className='flex flex-col gap-[20px]'>
          {todoObject?.tasks.map((task, idx) => (
            <div
              key={idx}
              onClick={() => handleTaskClick(task)}
              className='py-[23px] px-4 bg-white rounded-lg shadow-md flex flex-col gap-2'>
              <h3 className='text-[15px] font-bold '>{task.title}</h3>
              <p className='text-[12px] font-bold text-mediumGrey'>0 of{task.subtasks.length} subtask</p>
            </div>
          ))}
        </div>
      </div>
      {selectedTask && (
        <TaskModal task={selectedTask} onClose={handleCloseModal}/>
      )}
    </>
  )
}

export default PlatformLaunchColumns