import React from 'react'
import { Link } from 'react-router-dom'

function RealEstateHeader() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo2" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse">
                    {/* 목록 나열에는 <ul>(순서가 없는)
                    <ol> (순서가 있는) -- <li>태그로 항목 나열한다.
                    <dl> (사전처럼 용어를 설명하는 목록) 태그 들이 활용된다.*/}
                    <ul className="collapse navbar-collapse">
                        <li className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <Link to="/getRealEstateList" className="nav-link">부동산 매물 목록</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addContact" className="nav-link">부동산 매물 추가</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default RealEstateHeader