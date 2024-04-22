import ButtonLink from '@/components/ButtonLink';

const NotificationsSlot = () => {
    return (
        <section>
            <h1 className='text-xl'>Notifications Slot</h1>
            <ButtonLink href='/dashboard/active' name='Active Notifications' />
        </section>
    );
};

export default NotificationsSlot;
