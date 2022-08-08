import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { bookingTicketAPI, fetchRoomListAPI } from '../../services/booking';
import Chair from '../chair/chair';

export default function Booking() {
    const params = useParams().maLichChieu;
    const navigate = useNavigate();
    const [roomList, setRoomList] = useState({});
    const [selectedChairList, setSelectedChairList] = useState([]);

    useEffect(() => {
        fetchRoomList();
    }, []);

    const fetchRoomList = async () => {
        const data = await (await fetchRoomListAPI(params)).data.content;
        setRoomList(data);
    }

    const handleSelect = (selectedChair) => {
        let tempList = [...selectedChairList];

        const index = tempList.findIndex(ele => ele.tenGhe === selectedChair.tenGhe);

        if (index === -1) {
            tempList = [...tempList, selectedChair]
        }
        else {
            tempList.splice(index, 1)
        }
        setSelectedChairList(tempList)
    }

    const calTotalPrice = () => {
        return selectedChairList.reduce((total, value) => {
            return total += value.giaVe;
        }, 0)

    }

    const handleBookingTicket = async () => {
        const danhSachVe = selectedChairList.map(ele => {
            return (
                {
                    maGhe: ele.maGhe,
                    giaVe: ele.giaVe,
                }
            )
        });

        const data = {
            "maLichChieu": roomList.thongTinPhim.maLichChieu,
            "danhSachVe": danhSachVe,
        }

        await bookingTicketAPI(data);
        navigate('/');
    }

    return Object.keys(roomList).length !== 0 ?
        (
            <div className="row w-75 mx-auto my-5">
                <div className="col-8">
                    {
                        roomList.danhSachGhe.map((ele, index) => {
                            return (
                                <React.Fragment key={ele.tenGhe}>
                                    <Chair handleSelect={handleSelect} item={ele} />
                                    {(index + 1) % 16 === 0 && <br />}
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className="col-4">
                    <img className="img-fluid" src={roomList.thongTinPhim.hinhAnh} alt="alt" />
                    <h4>Tên phim: {roomList.thongTinPhim.tenPhim}</h4>
                    <h5>Tên cụm rạp:{roomList.thongTinPhim.tenCumRap} </h5>
                    <h6>Tên rạp: {roomList.thongTinPhim.tenRap}</h6>
                    <p>Danh sách ghế: {selectedChairList.map((ele) => {
                        return <span key={ele.tenGhe} className="badge badge-danger mr-2">{ele.tenGhe}</span>
                    })}</p>
                    <p>Tổng tiền:
                        <span> {calTotalPrice().toLocaleString()}</span>
                        <span> VND</span>
                    </p>
                    <button onClick={() => handleBookingTicket()} className="btn btn-primary font-weight-bold">BUY TICKETS</button>
                </div>
            </div>
        ) :
        (
            <div>Loading</div>
        )
}
