import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import ReactStars from 'react-rating-stars-component';
import IconStar from 'components/icons/iconstar';
import { updateBook } from 'graphql/mutations';

const RatingStars = ({ bookId, bookRating }) => {
  const onClick = (e) => {
    e.preventDefault();
  };

  const onChangeRating = async (bookId, newRating) => {
    await API.graphql({
      query: updateBook,
      variables: {
        input: {
          id: bookId,
          rating: newRating,
        },
      },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });
  };

  return (
    <div className="flex justify-center" onClick={onClick}>
      <ReactStars
        classNames="focus:outline-none z-10"
        onChange={(rating) => onChangeRating(bookId, rating)}
        count={5}
        value={bookRating}
        activeColor="yellow"
        emptyIcon={<IconStar className="w-5 h-5" />}
        filledIcon={<IconStar className="w-5 h-5 text-yellow-400" />}
      />
    </div>
  );
};

export default RatingStars;
