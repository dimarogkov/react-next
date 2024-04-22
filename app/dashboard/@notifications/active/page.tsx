import ButtonLink from '@/components/ButtonLink';

const ActiveNotificationsSlot = () => {
    return (
        <section>
            <h1 className='text-xl'>Active Notifications Slot</h1>
            <ButtonLink href='/dashboard' name='Notifications' />
        </section>
    );
};

export default ActiveNotificationsSlot;
