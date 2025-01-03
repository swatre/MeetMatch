export default function CustomErrorPage({ statusCode }) {
      return (
        <div>
          <h1>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </h1>
          <p>Please try again later or contact support.</p>
        </div>
      );
    }
