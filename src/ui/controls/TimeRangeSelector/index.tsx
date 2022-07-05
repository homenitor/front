interface Props {
  onRangeSelected: (range: string) => void
}

export const TimeRangeSelector = ({ onRangeSelected }: Props) => {
  const options = [
    { label: '30 minutes', value: '30m' },
    { label: '1 hour', value: '1h' },
    { label: '1 day', value: '1d' },
    { label: '1 week', value: '1w' },
  ]

  return (<select>
    {
      options.map(option => (<option onClick={() => onRangeSelected(option.value)} key={option.value} value={option.value}>{option.label}</option>))
    }
  </select>)
}
