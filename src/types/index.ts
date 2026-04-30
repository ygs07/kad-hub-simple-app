export interface ICTClass {
  id: string
  name: string
  description: string
  price: number
  startTime: string
  endTime: string
  days: string[]
  capacity: number
  currentStudents: number
  category: string
  image?: string
}

export interface Registration {
  id?: string
  classId: string
  studentName: string
  studentEmail: string
  isCustom: boolean
  customTime?: string
  totalFee: number
}
