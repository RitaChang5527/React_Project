export default function TabButton({children, isSelected, ...props}) {
    console.log('tab button rendered');
    return(
        <li>
            <button className={isSelected ? 'active':undefined} {...props}>{children}</button>
        </li>

    )
}