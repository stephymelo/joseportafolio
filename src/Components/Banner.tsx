import * as React from 'react';

interface Banner {
}

export const Banner: React.FC<Banner> = () => {


    return (
        <section id='banner' className='banner'>

            <section className='banner__section'>
                <article className='banner__name'>

                    <h1 className='namebox'>JOSÉ MIGUEL</h1>
                    <h1 className='lastname'>TAMAYO</h1>

                </article>
                <article>
                    <h3 className='pseudoname'>Polyphonic Ezog</h3>
                    <div className='icons'>
                    <a target="_instagram" href="https://www.instagram.com/polyphonic_ezog/?hl=es-la">
                            <svg className='icons--1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.16215C15.2041 2.16215 15.5837 2.17439 16.849 2.23212C18.019 2.28547 18.6544 2.48096 19.0773 2.6453C19.6374 2.86299 20.0371 3.12302 20.457 3.54291C20.877 3.96286 21.137 4.3626 21.3547 4.92273C21.519 5.34557 21.7145 5.98096 21.7679 7.15095C21.8256 8.41629 21.8378 8.79584 21.8378 11.9999C21.8378 15.2041 21.8256 15.5836 21.7679 16.849C21.7145 18.019 21.519 18.6543 21.3547 19.0772C21.137 19.6373 20.877 20.0371 20.4571 20.457C20.0371 20.8769 19.6374 21.1369 19.0773 21.3546C18.6544 21.519 18.019 21.7144 16.849 21.7678C15.5839 21.8255 15.2044 21.8378 12 21.8378C8.79563 21.8378 8.41618 21.8255 7.15097 21.7678C5.98098 21.7144 5.34559 21.519 4.92274 21.3546C4.36261 21.1369 3.96287 20.8769 3.54297 20.457C3.12308 20.0371 2.863 19.6373 2.64531 19.0772C2.48097 18.6543 2.28548 18.019 2.23213 16.849C2.1744 15.5836 2.16216 15.2041 2.16216 11.9999C2.16216 8.79584 2.1744 8.41629 2.23213 7.15095C2.28548 5.98096 2.48097 5.34557 2.64531 4.92273C2.863 4.3626 3.12303 3.96286 3.54297 3.54296C3.96287 3.12302 4.36261 2.86299 4.92274 2.6453C5.34559 2.48096 5.98098 2.28547 7.15097 2.23212C8.41632 2.17439 8.79587 2.16215 12 2.16215ZM12 0C8.741 0 8.33234 0.0138138 7.05241 0.072213C5.77516 0.130469 4.90283 0.333342 4.13954 0.629958C3.35044 0.936626 2.68123 1.34694 2.01406 2.01406C1.34695 2.68122 0.936629 3.35043 0.630008 4.13953C0.333343 4.90282 0.13047 5.77514 0.0722133 7.05239C0.0138139 8.33231 0 8.74096 0 11.9999C0 15.259 0.0138139 15.6676 0.0722133 16.9475C0.13047 18.2248 0.333343 19.0971 0.630008 19.8604C0.936629 20.6495 1.34695 21.3187 2.01406 21.9859C2.68123 22.653 3.35044 23.0633 4.13954 23.3699C4.90283 23.6666 5.77516 23.8694 7.05241 23.9277C8.33234 23.9861 8.741 23.9999 12 23.9999C15.259 23.9999 15.6677 23.9861 16.9476 23.9277C18.2248 23.8694 19.0972 23.6666 19.8605 23.3699C20.6496 23.0633 21.3188 22.653 21.9859 21.9859C22.653 21.3187 23.0634 20.6495 23.37 19.8604C23.6667 19.0971 23.8695 18.2248 23.9278 16.9475C23.9862 15.6676 24 15.259 24 11.9999C24 8.74096 23.9862 8.33231 23.9278 7.05239C23.8695 5.77514 23.6667 4.90282 23.37 4.13953C23.0634 3.35043 22.653 2.68122 21.9859 2.01406C21.3188 1.34694 20.6496 0.936626 19.8605 0.629958C19.0972 0.333342 18.2248 0.130469 16.9476 0.072213C15.6677 0.0138138 15.259 0 12 0Z" fill="#E2E2E2" />
                                <path d="M12.0056 5.84351C8.60225 5.84351 5.84338 8.60237 5.84338 12.0056C5.84338 15.4089 8.60225 18.1678 12.0056 18.1678C15.4088 18.1678 18.1677 15.4089 18.1677 12.0056C18.1677 8.60237 15.4088 5.84351 12.0056 5.84351ZM12.0056 16.0056C9.79639 16.0056 8.00554 14.2148 8.00554 12.0056C8.00554 9.7965 9.79639 8.00566 12.0056 8.00566C14.2147 8.00566 16.0055 9.7965 16.0055 12.0056C16.0055 14.2148 14.2147 16.0056 12.0056 16.0056Z" fill="#E2E2E2" />
                                <path d="M19.8508 5.59627C19.8508 6.39152 19.2061 7.03625 18.4108 7.03625C17.6156 7.03625 16.9708 6.39152 16.9708 5.59627C16.9708 4.80098 17.6156 4.15625 18.4108 4.15625C19.2061 4.15625 19.8508 4.80098 19.8508 5.59627Z" fill="#E2E2E2" />
                            </svg>
                        </a>
                        <a target="_youtube" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <svg className='icons--2' width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.3005 1.37807C24.6996 1.77717 24.9872 2.27386 25.1346 2.81868C25.9835 6.23572 25.7873 11.6324 25.1511 15.1813C25.0037 15.7261 24.7161 16.2228 24.317 16.6219C23.9179 17.021 23.4212 17.3086 22.8764 17.456C20.8819 18 12.8544 18 12.8544 18C12.8544 18 4.82691 18 2.8324 17.456C2.28759 17.3086 1.79089 17.021 1.39179 16.6219C0.992691 16.2228 0.705107 15.7261 0.557679 15.1813C-0.296167 11.7791 -0.0620999 6.37912 0.541197 2.83517C0.688622 2.29035 0.976206 1.79365 1.37531 1.39455C1.77441 0.99545 2.2711 0.707864 2.81592 0.560444C4.81043 0.0164795 12.8379 0 12.8379 0C12.8379 0 20.8654 0 22.8599 0.543954C23.4047 0.691384 23.9014 0.97897 24.3005 1.37807ZM16.9423 8.99999L10.283 12.8571V5.14285L16.9423 8.99999Z" fill="#E2E2E2" />
                            </svg>
                        </a>



                    </div>

                </article>


            </section>



        </section>
    );
}