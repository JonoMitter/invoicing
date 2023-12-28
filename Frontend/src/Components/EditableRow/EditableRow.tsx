import { useState } from 'react';
import './EditableRowStyles.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

interface Props {
    hourlyRate: number
}

function EditableRow(props: Props) {

    const GST_RATE = 0.10;

    const [sessionDate, setSessionDate] = useState(new Date());
    const [duration, setDuration] = useState(1);
    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');

    var sessionPrice: number = duration * props.hourlyRate;
    var gst: number = Math.round(sessionPrice * GST_RATE * 100) / 100;

    return (
        <tr>
            <td>
                <DatePicker
                    dateFormat="dd/mm/yyyy"
                    selected={sessionDate}
                    onChange={(date: Date) => setSessionDate(date)}
                />
            </td>
            <td>
                <input name="duration-hours" type="number" step={0.25} min={0} value={duration} onChange={(e) => setDuration(e.target.valueAsNumber)} aria-label="duration-input" />
            </td>
            <td>
                <input name="client" type="string" value={clientName} onChange={(e) => setClientName(e.target.value)} aria-label="client-input" />
            </td>
            <td>
                <input name="description" type="string" value={description} onChange={(e) => setDescription(e.target.value)} aria-label="description-input" />
            </td>
            <td className='readonly'>{sessionPrice.toFixed(2)}</td>
            <td className='readonly'>{gst.toFixed(2)}</td>
        </tr>
    );
}

export default EditableRow;
