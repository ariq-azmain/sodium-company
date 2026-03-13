const CTA = ({ text, href }) => {
  return (
    <div className="cta-container overflow-visible !px-[40px] !py-[10px]">
      <span>
        <a href={href} className="cta-btn">
          {text}
        </a>
      </span>
    </div>
  )
}

export default CTA