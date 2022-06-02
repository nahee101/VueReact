import axios from 'axios';
import { useEffect, useState } from 'react';

const DayBoxOfficeList = () => {
    const [boxOffice, setBoxOffice] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await axios.get(
                    ''
                )
            }
        }
    })
}