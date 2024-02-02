import React, { createContext, ReactNode, useEffect, useState} from 'react'

interface Subtask {
  title: string;
  isCompleted: boolean
}
export interface Task {
  title: string
  description: string
  status: string
  subtasks: Subtask[]
}
interface Column {
  name: string
  tasks: Task[]
}
interface Board {
  name: string
  columns: Column[]
}
interface KanbanData {
  boards: Board[]
}
// Define the type for your context values
interface ContextValues {
  // Add you context values here
  kanbanData: KanbanData,
  setKanbanData: React.Dispatch<React.SetStateAction<KanbanData>>
  Task: Task
}

// Create the context with an initial value of endefined
const Context = createContext<ContextValues | undefined>(undefined)

// Define the propr for your ContextProvider
interface ContextProviderProps {
  children: ReactNode
}

// Define the component
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  // Define the values you want to provide in the context
  const [kanbanData, setKanbanData] = useState<KanbanData>({ boards: []})
  
  useEffect(() => {
    fetch('src/starter-code/data.json')
      .then(res => res.json())
      .then(data => setKanbanData(data))
  }, [])

  const contextValues: ContextValues = {
    // Add your context values here
    kanbanData,
    setKanbanData,
    Task: {} as Task
  }
  return (
    <Context.Provider value={contextValues}> 
      { children }
    </Context.Provider>
  )
}

export { Context, ContextProvider }

