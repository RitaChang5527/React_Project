export default function TabButton({children, onSelect}) {
    console.log('tab button rendered');
    return(
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>

    )
}