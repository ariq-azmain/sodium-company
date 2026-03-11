const CTA = ({ text, href }) => {
  return (
    <div className="cta-container overflow-visible">
      <span>
        <a href={href} className="cta-btn">
          {text}
        </a>
      </span>
    </div>
  )
}

export default CTA