import React from 'react'
import Link from 'next/link'

function Sidebar() {
    return (
        <div>
            <h2>Sidebar</h2>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar