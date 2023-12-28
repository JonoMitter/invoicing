

function HeaderRow() {

    const HEADERS = ['Date', 'Duration (Hours)', 'Client Name', 'Description', 'Session Price', 'GST (10%)']
    return (
        <tr>
            {HEADERS.map((header, index) => (
                    <th key={index}>{header}</th>
            ))}
        </tr>
    );
}

export default HeaderRow;
