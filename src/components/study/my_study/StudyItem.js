import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/common/Style.css';
import styles from '../../../styles/study/my_study/StudyItem.module.css';

import { IoInfinite } from "react-icons/io5";
import { StudyDetailContext } from '../detail/StudyDetailProvider';

function StudyItem({ data }) {
    const navigate = useNavigate();
    const { clickedStudyItem } = useContext(StudyDetailContext);

    const click = (id) => {
        navigate(`/study/${id}`);
        clickedStudyItem(id);
    }

    return (
        <div className={styles['container']} onClick={() => click(data.study.id)}>
            <div className={styles['inner-container']}>
                <div className={styles['img']}>
                    {data && data.study.image ? (
                        <img src={data.study.image} />
                    ) : (
                        <img src="/images/logo.png" />
                    )}
                </div>
                <div className={styles['content']}>
                    {data && data.study.title ? (
                        <p>{data.study.title}</p>
                    ) : (
                        <p>제목없음</p>
                    )}
                    <div className={styles['status']}>
                        {data && data.study.Dday ? (
                            <p>D-{data.study.Dday}</p>
                        ) : (
                            <p>D- <IoInfinite /></p>
                        )}
                        <p>현재 진행상황</p>
                    </div>
                    <div className={styles['progress-bar']}>
                        <div 
                            className={styles['progress']}
                            style={{ width: `50%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudyItem;