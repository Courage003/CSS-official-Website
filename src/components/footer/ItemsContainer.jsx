import Item from './Item';
import { RESOURCES, CLUB, SUPPORT, Icons } from "./Menus"
const ItemsContainer = () => {
    return (
        <div className='grid grid-cols-1 sm: grid-cols-3 lg: grid-cols-4 gap-6 sm: px-5 py-16'>
            <Item Links={RESOURCES} title="RESOURCES" />
            <Item Links={CLUB} title="CLUB" />
            <Item Links={SUPPORT} title="SUPPORT" />
            <Item Links={Icons} title="ICONS" />

        </div>

    );

};

export default ItemsContainer;