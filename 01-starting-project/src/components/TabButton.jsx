export default function TabButton({children, onSelect, isSelected}) {
    console.log('tab button rendered');
    return(
        <li>
            <button className={isSelected ? 'active':undefined} onClick={onSelect}>{children}</button>
        </li>

    )
}