import * as React from 'react';
import { Range } from 'react-range';
import styles from '../styles/Home.module.css'
  
export default class Slider extends React.Component {
  state = { values: [50] };
  render() {
    return (
      <>
      <Range
        step={0.1}
        min={0}
        max={100}
        values={this.state.values}
        onChange={(values) => this.setState({ values })}
        renderTrack={({ props, children }) => (
          <div className= {styles.track}
            {...props}
            style={{...props.style}} class={styles.track}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div className= {styles.thumb}
            {...props}
            style={{
              ...props.style,
              height: '30px',
              width: '30px'
            }} class = {styles.thumb}
          />
        )}
      />
      <ul>
        <div className={styles.options}>
          <li>Strong reject</li>
          <li>Moderate reject</li>
          <li>Mild reject</li>
          <li>Mild accept</li>
          <li>Moderate accept</li>
          <li>Strong accept</li>
        </div>
      </ul>
      </>
    );
  }
}