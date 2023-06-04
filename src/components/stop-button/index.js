import './index.css'

export default function StopButton({ x, y }) {
  return (
    <div className="stop-button-container" style={{ top: y, left: x }}>
      <div className="square">STOP</div>
    </div>
  )
}
