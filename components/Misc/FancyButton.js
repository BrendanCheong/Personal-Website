const FancyButton = () => {

    const css = `
        .pushable {
            background: hsl(340deg 100% 32%);
            border-radius: 12px;
            border: none;
            padding: 0;
            cursor: pointer;
            outline-offset: 4px;
        }
        .front {
            display: block;
            padding: 5px 20px;
            border-radius: 12px;
            font-size: 16px;
            background: hsl(345deg 100% 47%);
            color: white;
            transform: translateY(-6px);
        }
    
        .pushable:active .front {
            transform: translateY(-2px);
        }
    `
    return (
        <>
            <style>{css}</style>
            <button className="pushable">
                <span className="front">
                    More
                </span>
            </button>
        </>
    )
}

export default FancyButton
