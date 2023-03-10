import { Card, ProgressBar } from "react-bootstrap"
import { currencyFormatter } from "../utils"

export default function BudgetCard( {name, amount, max} ) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div>
                    {currencyFormatter.format(amount)} / {currencyFormatter.format(max)}
                </div>
            </Card.Title>
            <ProgressBar
             className="rounded-pill"
             variant={getProgressBarVariant(amount, max)} 
             min={0} 
             max={max}
             now={amount} />
             
        </Card.Body>
    </Card>
  )
}

function getProgressBarVariant(amount, max){
    const ratio = amount / max
    if(ratio < .5) return "primary"
    if(ratio < .75) return "warning"
    return "danger"


}