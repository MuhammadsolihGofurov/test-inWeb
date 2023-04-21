import { get } from 'lodash';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import { Colors } from '../../constants/colors';

const Styled = styled.div`
    &.card{
        width:100%;
        position:relative;
        z-index:0;
        min-height:${props => props.isMain ? '410px' : '450px'};
        transition: all .5s;

        @media screen and (max-width:992px){
            min-height:${props => props.isGrid ? '300px' : '350px'};
        }

        &:hover{
            .card__image{
                img{
                    transform:scale(1.1);
                }
            }
        }
        .card{
            &__image{
                width:100%;
                height:300px;
                background-color:${Colors?.text_grey_6};
                border-radius:8px;
                overflow:hidden;
                span{
                    display:block !important;
                    height:100%;
                }
                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    transition:all .5s;
                }

                @media screen and (max-width:1200px){
                    height:350px;
                }
                @media screen and (max-width:992px){
                    height:${props => props.isGrid ? '250px' : ''};
                }
                @media screen and (max-width:850px){
                    height:${props => props.isGrid ? '300px' : ''};
                }
                @media screen and (max-width:576px){
                    height:${props => props.isGrid ? '220px' : ''};
                }
                @media screen and (max-width:480px){
                    height:${props => props.isGrid ? '170px' : '300px'};
                }
            }
            &__action{
                position:absolute;
                top:${props => props.isMain ? '77%' : '70%'};
                right:0;
                background-color:${Colors?.main};
                clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
                padding:5px 5px 5px 15px;
                color:${Colors?.white};
                font-weight:bold;
                font-size:14px;
                transform:translateY(-20%);
                @media screen and (max-width:1200px){
                    top:87%;
                }
                @media screen and (max-width:992px){
                    top:${props => props.isGrid ? '60%' : ''};
                }
                @media screen and (max-width:576px){
                    top:${props => props.isGrid ? '55%': '83%'};
                }
                @media screen and (max-width:480px){
                    top:${props => props.isGrid ? '42%' : '65%'};
                    font-size:${props => props.isGrid ? '12px' : ''};
                }
            }
            &__top{
                width:44px;
                height:24px;
                border-radius:500px;
                background-color:${Colors?.main};
                position:absolute;
                top:10px;
                left:10px;
                display:flex;
                justify-content:center;
                align-items:center;
            }
            &__body{
                padding-top:16px;
                .card{
                    &__price{
                        display:flex;
                        align-items:center;
                        gap:10px;
                        flex-wrap:wrap;
                        padding-right:20px;
                        padding-bottom:15px;
                        .current{
                            color:${Colors?.text_primary};
                            font-size:18px;
                            font-weight:600;
                        }
                        .old{
                            color:${Colors?.text_secondary};
                            font-size:14px;
                            text-decoration: .5px line-through;
                            padding-top:1px;
                        }
                    }
                    &__description{
                        color:${Colors?.text_primary};
                        @media screen and (max-width:480px){
                            font-size:${props => props.isGrid ? '12px' : ''};
                        }
                    }
                }
            }
        }
        


    }
`

export default function Card({ isMain, isGrid, item, ...rest }) {
    return (
        <Styled {...rest} className='card' isGrid={isGrid} isMain={isMain}>
            <div className="card__image">
                <LazyLoadImage
                    src={get(item, 'images[1]')}
                    alt={get(item, 'id')}
                    effect='lazy'
                />
            </div>
            {
                get(item, 'top') && <div className="card__top">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6485 5.74215C18.4698 5.59292 18.2526 5.49694 18.022 5.46517C17.7913 5.4334 17.5563 5.46711 17.3438 5.56246L13.3907 7.32028L11.0938 3.17965C10.9841 2.98634 10.825 2.82557 10.6329 2.71373C10.4407 2.60189 10.2224 2.54297 10.0001 2.54297C9.77777 2.54297 9.55943 2.60189 9.3673 2.71373C9.17517 2.82557 9.01612 2.98634 8.90633 3.17965L6.60946 7.32028L2.65633 5.56246C2.44345 5.46725 2.20817 5.43349 1.9771 5.465C1.74604 5.49651 1.52839 5.59203 1.34877 5.74077C1.16915 5.8895 1.03472 6.08552 0.960675 6.30666C0.886631 6.5278 0.875926 6.76524 0.929771 6.99215L2.91415 15.4531C2.95209 15.6169 3.02289 15.7713 3.12227 15.9069C3.22164 16.0426 3.34752 16.1566 3.49227 16.2422C3.68824 16.3595 3.91231 16.4215 4.14071 16.4218C4.25174 16.4216 4.36219 16.4058 4.46883 16.375C8.08588 15.3749 11.9065 15.3749 15.5235 16.375C15.8538 16.4618 16.205 16.414 16.5001 16.2422C16.6457 16.1577 16.7723 16.044 16.8718 15.9082C16.9713 15.7724 17.0416 15.6174 17.0782 15.4531L19.0704 6.99215C19.1236 6.76518 19.1123 6.52785 19.0378 6.30696C18.9632 6.08608 18.8284 5.89044 18.6485 5.74215ZM15.8595 15.1718C12.0228 14.1093 7.96955 14.1093 4.1329 15.1718L2.14852 6.7109L6.10165 8.4609C6.3853 8.58985 6.70724 8.60676 7.00284 8.50823C7.29844 8.40969 7.54584 8.20301 7.6954 7.92965L10.0001 3.78903L12.3048 7.92965C12.4543 8.20301 12.7017 8.40969 12.9973 8.50823C13.2929 8.60676 13.6149 8.58985 13.8985 8.4609L17.8516 6.7109L15.8595 15.1718Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.26229 2.53376C9.48624 2.4034 9.74074 2.33472 9.99988 2.33472C10.259 2.33472 10.5135 2.4034 10.7375 2.53376C10.9614 2.66413 11.1468 2.85152 11.2748 3.07685L11.2758 3.07867L13.4802 7.05249L17.2583 5.37248C17.5063 5.26127 17.7809 5.22179 18.0502 5.25887C18.3194 5.29594 18.5728 5.4079 18.7814 5.58197C18.991 5.75491 19.1481 5.98296 19.235 6.24042C19.322 6.49812 19.3351 6.77501 19.273 7.03981L17.2813 15.4985L17.2811 15.4997C17.2381 15.6917 17.1559 15.8727 17.0396 16.0314C16.9232 16.1903 16.775 16.3235 16.6046 16.4224C16.2618 16.6219 15.8539 16.6774 15.4703 16.5765L15.4678 16.5758C11.8875 15.586 8.10566 15.5859 4.52527 16.5755C4.40032 16.6116 4.27095 16.63 4.14089 16.6303C3.87516 16.6299 3.6138 16.5577 3.38573 16.4214C3.21684 16.3215 3.06997 16.1884 2.95401 16.0301C2.83802 15.8718 2.75537 15.6916 2.71104 15.5004L0.726862 7.04033C0.66412 6.7757 0.676563 6.4985 0.762916 6.2406C0.849301 5.9826 1.00614 5.75391 1.21569 5.58039C1.42525 5.40686 1.67917 5.29542 1.94875 5.25866C2.21826 5.22191 2.49267 5.26126 2.74099 5.37228L6.5196 7.05249L8.72395 3.07867L8.72497 3.07685C8.85293 2.85152 9.03833 2.66413 9.26229 2.53376ZM9.99988 2.75138C9.81439 2.75138 9.63221 2.80055 9.4719 2.89386C9.31188 2.98701 9.17935 3.12085 9.08777 3.28176L9.08729 3.28261L6.6989 7.58822L2.57148 5.75291C2.39408 5.67356 2.1976 5.64525 2.00505 5.67151C1.81249 5.69776 1.63112 5.77737 1.48144 5.90131C1.33175 6.02526 1.21973 6.18861 1.15802 6.37289C1.09632 6.55717 1.0874 6.75504 1.13227 6.94413L3.11677 15.4056C3.14835 15.5419 3.20741 15.671 3.29012 15.7839C3.37283 15.8968 3.47759 15.9917 3.59806 16.0629L3.59907 16.0635C3.76268 16.1614 3.94972 16.2133 4.1404 16.2136C4.23185 16.2134 4.32282 16.2004 4.41067 16.1749L4.41311 16.1742C8.06603 15.1643 11.9245 15.1642 15.5775 16.1739L15.5788 16.1742L15.5233 16.375L15.5763 16.1736L15.5775 16.1739C15.854 16.2462 16.148 16.2061 16.395 16.0622C16.5158 15.9922 16.621 15.8977 16.7035 15.7851C16.786 15.6725 16.8443 15.5441 16.8747 15.4078L16.8752 15.4054L18.8674 6.94465C18.9117 6.75557 18.9023 6.55768 18.8402 6.37366C18.7781 6.18959 18.6657 6.02656 18.5158 5.90299L18.5148 5.90216C18.366 5.77796 18.1853 5.69808 17.9933 5.67164C17.8013 5.64519 17.6058 5.67325 17.4289 5.75261L13.3009 7.58822L10.9125 3.28261L10.912 3.28171C10.8204 3.12082 10.6879 2.987 10.5279 2.89386C10.3675 2.80055 10.1854 2.75138 9.99988 2.75138ZM9.99988 3.36074L12.4873 7.82974C12.6116 8.05696 12.8173 8.22876 13.063 8.31066C13.3087 8.39257 13.5763 8.37852 13.8121 8.27133L13.814 8.27047L18.1503 6.35086L16.0124 15.4305L15.8036 15.3727C12.0034 14.3203 7.98856 14.3203 4.18829 15.3727L3.97936 15.4306L1.84991 6.35105L6.18766 8.27132C6.42345 8.37851 6.69104 8.39257 6.93675 8.31066C7.18246 8.22876 7.38811 8.05696 7.51242 7.82974L7.51315 7.82841L9.99988 3.36074ZM9.99988 4.21747L7.87796 8.02972C7.70313 8.34889 7.41377 8.59086 7.06851 8.70595C6.72335 8.821 6.34747 8.80139 6.01617 8.65107L2.44672 7.07092L4.28626 14.9143C8.02749 13.9175 11.9646 13.9175 15.7059 14.9144L17.5526 7.0711L13.9845 8.65064L13.9836 8.65108C13.6523 8.80139 13.2764 8.821 12.9312 8.70595C12.586 8.59086 12.297 8.34955 12.1222 8.03039L9.99988 4.21747Z" fill="white" />
                    </svg>
                </div>
            }
            <div className="card__body">
                <div className="card__price">
                    <h3 className='current'>{get(item, 'price')} сум</h3>
                    {get(item, 'total') && <p className='old'>{get(item, 'total')} сум</p>}
                </div>
                <p className='card__description'>
                    {get(item, 'description')}
                </p>
            </div>
            {get(item, 'action') && <div className="card__action">{get(item, 'action')}%</div>}
        </Styled>
    )
}
