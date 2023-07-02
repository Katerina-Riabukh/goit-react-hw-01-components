import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th className={css.head}>Type</th>
                    <th className={css.head}>Amount</th>
                    <th className={css.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                    <tr className={css.zebra} key={id}>
                        <td className={css.body}>{ type}</td>
                        <td className={css.body}>{amount}</td>
                        <td className={css.body}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}