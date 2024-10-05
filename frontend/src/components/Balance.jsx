
export const Balance = ({ value }) => {
    return <div className="flex align items-end">
        <div className="font-bold text-lg">
            Your balance:
        </div>
        <div className="font-bold ml-4 text-4xl text-blue-900">
            Rs {value}
        </div>
    </div>
}