export interface Skill {
  skill: string
  id: number
}

export interface EmployeeModel {
  id: number
  lastName: string
  firstName: string
  street: string
  postcode: string
  city: string
  phone: string
  skillSet: Skill[]
}

