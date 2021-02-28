import HorizontalBarChart, {
  createSeries,
} from 'ember-website/utils/highcharts/horizontal-bar-chart';
import { module, test } from 'qunit';

module('Unit | Utility | highcharts/horizontal-bar-chart', function () {
  module('HorizontalBarChart', function () {
    test('can be instantiated', function (assert) {
      const barChart = new HorizontalBarChart();

      assert.ok(barChart, 'We can create an instance of HorizontalBarChart.');
    });

    test('highchartsOptions returns an options object', function (assert) {
      const { options } = new HorizontalBarChart().highchartsOptions;

      assert.deepEqual(
        options,
        {
          chart: {
            type: 'bar',
          },

          subtitle: {
            text: 'TODO: Allow subtitle',
          },

          title: {
            text: 'TODO: Allow title',
          },

          tooltip: {
            enabled: true,
            valueSuffix: '%',
          },

          xAxis: {},

          yAxis: {},
        },
        'We get the correct value.'
      );
    });
  });

  module('createSeries', function () {
    test('returns the series object', function (assert) {
      const rawData = [
        {
          color: '#4B4B4B',
          label: '2017',
          values: [1.9, 5.2, 33.3, 16.4, 41.6, 49.8],
        },
        {
          color: '#F23818',
          label: '2018',
          values: [3.0, 9.8, 52.2, 23.8, 34.2, 57.8],
        },
      ];

      const series = createSeries(rawData);

      assert.strictEqual(series.length, 2, 'We see 2 series of data.');

      // Check series 1
      assert.deepEqual(
        series[0],
        {
          color: '#4B4B4B',
          data: [1.9, 5.2, 33.3, 16.4, 41.6, 49.8],
          name: '2017',
        },
        'We get the correct data for the 1st series.'
      );

      // Check series 2
      assert.deepEqual(
        series[1],
        {
          color: '#F23818',
          data: [3.0, 9.8, 52.2, 23.8, 34.2, 57.8],
          name: '2018',
        },
        'We get the correct data for the 2nd series.'
      );
    });
  });
});
