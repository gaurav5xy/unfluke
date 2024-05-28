function Table() {
    const items = ['Rank', 'Name', 'Calmar Ratio', 'Overall Profit', 'Avg. Daily Profit', 'Win %(Day)', 'Price (Rs)', 'Action'];
    const rows = [
        ['Selling with re entr', '3.96', '381845', '319.54', '0.65', '-'],
        ['strategy_name', '3.62', '268872.5', '216.31', '0.64', '500'],
        ['Based on premium and', '3.42', '255425', '208.51', '0.64', '-'],
        ['strategy_name', '3.22', '370845', '303.47', '0.65', '-'],
        ['Selling with re entr', '3.96', '381845', '319.54', '0.65', '-'],
        ['strategy_name', '3.62', '268872.5', '216.31', '0.64', '-'],
        ['Based on premium and', '3.42', '255425', '208.51', '0.64', '-'],
        ['strategy_name', '3.22', '370845', '303.47', '0.65', '-'],
        ['Selling with re entr', '3.96', '381845', '319.54', '0.65', '-'],
        ['strategy_name', '3.62', '268872.5', '216.31', '0.64', '-']
    ];

    const renderRow = (row, index) => (
        <tr key={index} className="even:bg-gray-100">
            <th className="px-4 py-2 border">{index + 1}</th>
            {row.map((item, i) => <td key={i} className="px-4 py-2 border">{item}</td>)}
            <td className="px-4 py-2 border">{row[5] === '-' ? 'View' : 'Buy'}</td>
        </tr>
    );

    return (
        <div className="p-5">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        {items.map((item, index) => (
                            <th key={index} className="px-4 py-2 border">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => renderRow(row, index))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
