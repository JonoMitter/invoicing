import EditableRow from '../EditableRow/EditableRow';
import { useState } from 'react';
import './InvoiceFormStyles.css';

function InvoiceForm() {

    const [hourlyRate, setHourlyRate] = useState(99.10);

    return (
        <div>
            <label>
                Hourly Rate ($): <input required name="hourlyRate" type='number' step={1} value={hourlyRate} onChange={e => setHourlyRate(e.target.valueAsNumber || 0)} min={0}/>
            </label>

            <div className='container'>
                <table>
                    <tr>
                        <th>Session Date</th>
                        <th>Session Time</th>
                        <th>Client</th>
                        <th>Description</th>
                        <th>Duration (Hours)</th>
                        <th>Session Price ($)</th>
                        <th>GST (10%) ($)</th>
                    </tr>
                    <tr>
                        <td>Mon 24-Jul-2023</td>
                        <td>12.10 to 12.30/</td>
                        <td>Kobe N.</td>
                        <td>Behaviour Management/Travel Time</td>
                        <td>0.20</td>
                        <td>33.03</td>
                        <td>3.30</td>
                    </tr>
                    <EditableRow hourlyRate={hourlyRate}/>
                </table>
            </div>
        </div>
    );
}

export default InvoiceForm;
