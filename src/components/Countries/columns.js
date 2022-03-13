import { CloseOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import moment from 'moment';

export default function generateColumns(props) {
  const {
    onSelectCountry,
    onDeleteCountry
  } = props;

  const columns = [
    {
      title: 'Date',
      dataIndex: 'Date',
      render: (date) => moment(date).format("DD-MM-YYYY"),
    },
    {
      title: 'Country',
      dataIndex: 'Country',
      key: 'country',
      render: (value, record) => <a onClick={() => onSelectCountry(record.CountryCode)}>{value}</a>,
    },
    {
      title: 'New Confirmed',
      dataIndex: 'NewConfirmed',
      key: 'NewConfirmed',
    },
    {
      title: 'Total Confirmed',
      dataIndex: 'TotalConfirmed',
      key: 'TotalConfirmed',
    },
    {
      title: 'New Deaths',
      dataIndex: 'NewDeaths',
      key: 'NewDeaths',
    },
    {
      title: 'Total Deaths',
      dataIndex: 'TotalDeaths',
      key: 'TotalDeaths',
    },
    {
      title: 'New recovered',
      dataIndex: 'NewRecovered',
      key: 'NewRecovered',
    },
    {
      title: 'Total recovered',
      dataIndex: 'TotalRecovered',
      key: 'TotalRecovered',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      align: 'center',
      width: 100,
      render: (text, record) => (
        <Tooltip
          placement="top"
          title={'Delete'}
        >
          <Button
            onClick={() => onDeleteCountry(record.id)}
            type="link"
            icon={<CloseOutlined />}
          />
        </Tooltip>
      )
    },
  ];

  return columns;
}
