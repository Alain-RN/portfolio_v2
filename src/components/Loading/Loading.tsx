import "./Loading.css"

export default function Loading() {
    const points = generateHexagonPoints(50, 50, 40) // centre (50,50), rayon 40px

    return (
        <svg className="loading"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            style={{ display: "block", margin: "50px auto" }}
        >
            {/* Hexagone régulier animé */}
            <polygon
                points={points}
                stroke="var(--violet-b)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="600"
                strokeDashoffset="600"
            >
                <animate
                    attributeName="stroke-dashoffset"
                    from="600"
                    to="0"
                    dur="1.5s"
                    repeatCount="indefinite"
                />
            </polygon>

            <text
                x="50"
                y="61"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="32"
                fontWeight="700"
                fill="var(--violet-b)"
            >
                N
            </text>
        </svg>
    )
}

function generateHexagonPoints(cx: number, cy: number, r: number) {
    const points: string[] = []
    for (let i = 0; i < 6; i++) {
        const angle = (2 * Math.PI * i) / 6 - Math.PI / 2
        const x = cx + r * Math.cos(angle)
        const y = cy + r * Math.sin(angle)
        points.push(`${x},${y}`)
    }
    return points.join(" ")
}
