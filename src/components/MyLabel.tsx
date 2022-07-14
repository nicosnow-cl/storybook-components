import './myLabel.css';

export interface MyLabelProps {
    /**
    * MyLabel contents
    */
    label?: string;

    /**
    * How large should the MyLabel be?
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
    *   The color of the MyLabel 
    */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
    *   Want to make the MyLabel all caps? 
    */
    allCaps?: boolean;

    /**
    *   The custom color of the MyLabel 
    */
    fontColor?: string;
}

const MyLabel = ( {
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor
}: MyLabelProps ) => {
    return (
        <span
            className={ `label ${ size } text-${ color }` }
            style={ { color: fontColor } }
        >
            { ( allCaps ) ? label.toUpperCase() : label }
        </span>
    );
};

export default MyLabel;