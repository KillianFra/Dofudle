

export function SpellPane(props: any) {
    return (
        <div className="w-1/4 h-2/3 bg-dprimary border-dsecondary border-2 rounded-lg">
        {props.children}
        </div>
    );
}