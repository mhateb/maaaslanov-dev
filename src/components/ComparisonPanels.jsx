function MockField({ label, value }) {
  return (
    <div className="grid w-full shrink-0 gap-[5px] text-[10px] leading-[1.3] xl:text-xs">
      <p className="text-[#526367]">{label}</p>
      <p className="rounded-[5px] bg-white py-[9px] pl-2.5 text-[#69777c] xl:py-3">{value}</p>
    </div>
  )
}

function Panel({ after, title, children }) {
  return (
    <div className={`flex h-full flex-col items-start gap-2.5 overflow-hidden px-3 py-[18px] xl:gap-4 xl:px-[22px] ${after ? 'bg-[#d7efe3]' : 'bg-[#e6e6e1]'}`}>
      <p className={`shrink-0 rounded-full px-2.5 py-[5px] text-sm leading-[1.3] font-medium ${after ? 'bg-deep text-mint' : 'bg-[#d2d6d3] text-[#48585d]'}`}>
        {after ? 'ПОСЛЕ' : 'ДО'}
      </p>
      <p className="text-sm leading-[1.3] font-medium text-deep xl:text-[21px]">{title}</p>
      {children}
    </div>
  )
}

export function BeforePanel() {
  return (
    <Panel title="С нуля">
      {['Заголовок', 'Механика', 'Оформление'].map(label => <MockField key={label} label={label} value="Вручную" />)}
    </Panel>
  )
}

export function AfterPanel({ onPreview }) {
  return (
    <Panel after title="Из блоков">
      <p className="shrink-0 text-[9px] leading-[1.3] text-[#455e56] xl:text-xs">UI-блоки и AI.</p>
      <MockField label="Готовый блок" value="UI-блок" />
      <button className="pill bg-deep whitespace-nowrap text-ink" type="button" onClick={onPreview}>Превью ↗</button>
    </Panel>
  )
}
