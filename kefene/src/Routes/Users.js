import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Users.css'


function Users() {
    let [users, setUsers] = useState([])
    let [search, setSearch] = useState('')
    let baseUrl = `https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users`

    function searchUsers() {
        axios.get(baseUrl)
            .then((response) => {
                setUsers(response.data)
            }).catch((error) => {
                if (error.response && error.response.status === 404) {
                    setUsers([])
                }
                else {
                    console.log(error)
                }
            })
    }

    function getSearchUsers() {

        if (search.length >= 2) {
            axios.get(`${baseUrl}?fullName=${search}`)
                .then((response) => {
                    console.log(response.data)
                    setUsers(response.data)
                }).catch((error) => {
                    if (error.response && error.response.status === 404) {
                        setUsers([])
                    }
                    else {
                        console.log(error)
                    }
                })
        }
    }
    useEffect(() => {
        if (search.length > 0) {
            getSearchUsers()
        }
        else {
            searchUsers()
        }
    }, [search])

    return (
        <div style={{ overflow: 'scroll' }}>
            <div>
                <center style={{ fontFamily: 'monospace', fontSize: '40px', margin: "20px", fontWeight: '600', maxWidth: '100%' }}>
                    Users
                </center>
            </div>
            <div id="users-main-section">
                <form action="">
                    <input
                        type="text"
                        name="search-input"
                        id="search-input"
                        placeholder='search by name'
                        value={search}
                        onChange={(e) => {
                            e.preventDefault();
                            setSearch(e.target.value)
                        }} />
                    <button id="btn-reset" value="reset" onClick={(e) => {
                        e.preventDefault();
                        setSearch('')
                    }}>
                        Reset
                    </button>
                </form>
            </div>
            <hr />
            <table id="table-main" style={{ maxWidth: '90%' , overflow : 'scroll'}}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Avatar</th>
                        <th>User name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Current location</th>
                    </tr>
                </thead>
                <tbody>

                    {users.length > 0 ?
                        (users.map((user) => (
                            <tr key={user.id}>
                                <td style={{ color: '#8c8c8c' }}>{user.id}</td>
                                <td>
                                    <img src={user.profilePic} />
                                </td>
                                <td>{user.fullName}</td>
                                <td style={{ border: 'none', textAlign: 'left', color: '#8c8c8c' }}>{user.dob}</td>
                                <td style={{ color: '#8c8c8c' }}>{user.gender}</td>
                                <td>{user.currentCity} , {user.currentCountry}</td>
                            </tr>
                        ))) : (
                            <tr>
                                <td colSpan="6" style={{ textAlign: 'center', color: 'red', fontFamily: 'monospace' }}>
                                    No data found! please Enter a valid name 
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users