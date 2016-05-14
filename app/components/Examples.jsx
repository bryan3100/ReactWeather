var React = require('react');
var {Link, IndexLink} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Los Angeles'>Los Angeles, CA</Link>
        </li>
        <li>
          <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
