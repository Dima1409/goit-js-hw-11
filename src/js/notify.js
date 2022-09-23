import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class NotifyAlert {
  constructor() {}
  onError() {
    return Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  onSuccess(total) {
    return Notify.success(`Hooray! We found ${total} images.`);
  }

  onSearchNull() {
    return Notify.info('Please enter your search details');
  }

  onSearchEndList() {
    return Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
  }
}
