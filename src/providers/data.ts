import { BaseRecord, DataProvider, GetListParams, GetListResponse } from "@refinedev/core";

const subjects = [
  {
    id: '1',
    code: 'CS101',
    name: 'Introduction to Computer Science',
    department: 'Computer Science',
    description: 'Fundamental concepts of computing, programming, and problem solving for first-year students.'
  },
  {
    id: '2',
    code: 'MATH220',
    name: 'Linear Algebra and Matrix Theory',
    department: 'Mathematics',
    description: 'Vector spaces, matrix operations, systems of linear equations, and applications in engineering and science.'
  },
  {
    id: '3',
    code: 'ENG305',
    name: 'Technical Writing for Engineers',
    department: 'English',
    description: 'Techniques for clear, concise written communication in technical and professional environments.'
  }
];

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({ resource }: 
    GetListParams): Promise<GetListResponse <TData>> => {
      if (resource !== 'subjects') return { data:[] as TData[], total: 0 };

      return {
        data: subjects as unknown as TData[],
        total: subjects.length
      }
    },
    getOne: async () => {throw new Error('This function is not available in mock data provider')},
    create: async () => {throw new Error('This function is not available in mock data provider')},
    update: async () => {throw new Error('This function is not available in mock data provider')},
    deleteOne: async () => {throw new Error('This function is not available in mock data provider')},
    getApiUrl: () => '',
}