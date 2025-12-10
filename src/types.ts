export interface Question {
  text: string
  link: string
  semester?: string
}

// Using Record<string, Question[]> allows you to add any "Semester" key dynamically
export type QuestionsCollection = Record<string, Array<Question>>

export interface QuestionCardProps {
  item: Question
  index: number
}

export interface SemesterTabProps {
  label: string
  active: boolean
  onClick: () => void
}
