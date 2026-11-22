type MockFieldPropsType = {
  label: string
  value: string
}

const MockField = ({ label, value }: MockFieldPropsType) => {
  return (
    <div className="grid w-full shrink-0 gap-1.25 text-[10px] leading-[1.3] xl:text-xs">
      <p className="text-[#526367]">{label}</p>
      <p className="rounded-[5px] bg-white py-2.25 pl-2.5 text-[#69777c] xl:py-3">{value}</p>
    </div>
  )
}

export default MockField
