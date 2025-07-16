import { DatePicker, Flex } from 'antd'
import dayjs from 'dayjs'
import { formatMonth } from '../../../../helper/date'
import ChartsCategories from './ChartsCategories'

const Categories = () => {
  return (
    <div className='categories-container w-full bg-primary'>
      <Flex className='flex-center flex-between px-16 py-16'>
        <h2 className='body-m-emphasized body-m-bold'>Overall Spendings</h2>
        <DatePicker defaultValue={dayjs()} format={formatMonth(dayjs().toDate())} style={{ width: 100 }} />
      </Flex>
      <div className="chart-categories">
        <ChartsCategories />
      </div>
    </div>
  )
}

export default Categories