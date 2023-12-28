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
    const ONE_HOUR_MS = 3600 * 1000;

    // const [sessionDate, setSessionDate] = useState(new Date().toISOString().substring(0, 10));
    const [sessionDate, setSessionDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date(Date.now() - ONE_HOUR_MS));
    const [endTime, setEndTime] = useState(new Date());
    const [clientName, setClientName] = useState('');
    const [description, setDescription] = useState('');

    var duration: number = new Date(endTime.getTime() - startTime.getTime()).getTime();
    var sessionPrice: number = duration * props.hourlyRate;
    var gst: number = Math.round(sessionPrice * GST_RATE * 100) / 100;

    return (
        <tr>
            <td>
                {/* <input name="sessionDate" type="date" value={sessionDate} onChange={(e) => setSessionDate(e.target.value)} /> */}
                <DatePicker
                    showIcon
                    selected={sessionDate}
                    onChange={(date: Date) => setSessionDate(date)}
                />
            </td>
            <td>
                <div><DatePicker
                    selected={startTime}
                    onChange={(time: Date) => setStartTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Start Time"
                    dateFormat="h:mm aa"
                />
                </div> to 
                <div>
                <DatePicker
                    selected={endTime}
                    onChange={(time: Date) => setEndTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="End Time"
                    dateFormat="h:mm aa"
                />
                </div>
            </td>
            <td>
                <input name="client" type="string" value={clientName} onChange={(e) => setClientName(e.target.value)} />
            </td>
            <td>
                <input name="description" type="string" value={description} onChange={(e) => setDescription(e.target.value)} />
            </td>
            <td className='readonly'>{duration}</td>
            <td className='readonly'>{sessionPrice.toFixed(2)}</td>
            <td className='readonly'>{gst.toFixed(2)}</td>
        </tr>
    );
}

export default EditableRow;
