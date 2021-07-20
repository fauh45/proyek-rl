import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../css/token.css";
import {Link} from 'react-router-dom';

const MODAL_STYLES = {
    position: 'fixed',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0, .7)',
    zIndex: 1000
}

export default function Token({ open, children, onClose }) {
    if(!open) return null

    return (
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                {children}
                <Link to="/dashboard-play" className="btn btn-primary" variant="dark" size="lg">Submit</Link>
                <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            </div>
        </>
    );
}
