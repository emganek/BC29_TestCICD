import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchMovieShowTimeAPI } from '../../services/cinema';
import { formatDate } from '../../utils/common';

export default function ShowTime() {
    const params = useParams().movieID;

    const [showTime, setShowTime] = useState({});
    useEffect(() => {
        fetchMovieShowTime();
    }, []);

    const fetchMovieShowTime = async () => {
        const data = await (await fetchMovieShowTimeAPI(params)).data.content;
        setShowTime(data);
        console.log(data);
    };

    const renderTabs = () => {
        return showTime?.heThongRapChieu?.map((ele, index) => {
            return (
                <a key={ele.maHeThongRap} className={`nav-link text-capitalize ${index === 0 && 'active'}`} data-toggle="pill" href={`#${ele.maHeThongRap}`} role="tab" aria-selected="false">{ele.tenHeThongRap}</a>
            )
        })
            ;
    }

    const renderContent = () => {
        return showTime.heThongRapChieu?.map((ele, index) => {
            return (
                <div key={ele.maHeThongRap} className={`tab-pane fade show ${index === 0 && 'active'}`} id={`${ele.maHeThongRap}`} role="tabpanel">
                    {
                        ele.cumRapChieu.map((item) => {
                            return (
                                <div key={item.maCumRap} className="row mb-5">
                                    <div className="col-1">
                                        <img className="img-fluid rounded" src={item.hinhAnh} />
                                    </div>
                                    <div className="col-11 pl-0">
                                        <h5>{item.tenCumRap}</h5>
                                        <span className="text-muted">{item.diaChi}</span>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            {
                                                item.lichChieuPhim.map(schedule => {
                                                    return (
                                                        <div key={schedule.maLichChieu} className="col-3">

                                                            <Link to={`/booking/${schedule.maLichChieu}`} href="#">
                                                                {formatDate(schedule.ngayChieuGioChieu)}</Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
    }

    return (
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {renderTabs()}
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}
