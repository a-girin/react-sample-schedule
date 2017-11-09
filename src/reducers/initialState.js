export default {
	types: {
		rssTypes: [
			{
				id: 0,
				type: "touchpoint",
			},
			{
				id: 1,
				type: "terminal",
			},
		],
		taskTypes: [
			{
				id: 0,
				type: "bagging",
				title: "Bagging",
				rssTypeId: 0,
			},
			{
				id: 1,
				type: "picking",
				title: "Picking",
				rssTypeId: 0,
			},
			{
				id: 2,
				type: "merge",
				title: "Merge",
				rssTypeId: 0,
			},
			{
				id: 3,
				type: "stock_assurance",
				title: "Stock Assurance",
				rssTypeId: 0,
			},
			{
				id: 4,
				type: "decant",
				title: "Decant",
				rssTypeId: 0,
			},
			{
				id: 5,
				type: "quality_assurance",
				title: "Quality Assurance",
				rssTypeId: 0,
			},
			{
				id: 6,
				type: "loading",
				title: "Loading",
				rssTypeId: 1,
			},
			{
				id: 7,
				type: "returning",
				title: "Returning",
				rssTypeId: 1,
			},
		],
	},
	schedule: [
		{
			id: 1,
			title: "Touchpoint 1",
			typeId: 0,
			tasks: [
				{
					id: 0,
					typeId: 0,
					start_time: 1487725200000,
					end_time: 1487736000000,
				},
				{
					id: 1,
					typeId: 1,
					start_time: 1487736000000,
					end_time: 1487790000000,
				},
				{
					id: 2,
					typeId: 2,
					start_time: 1487790000000,
					end_time: 1487800800000,
				},
			],
		},
		{
			id: 2,
			title: "Touchpoint 3",
			typeId: 0,
			tasks: [
				{
					typeId: 1,
					start_time: 1487800808954,
					end_time: 1487865608954,
					id: 0,
				},
				{
					typeId: 0,
					start_time: 1487865625391,
					end_time: 1487880025391,
					id: 1,
				},
			],
		},
		{
			id: 3,
			title: "Touchpoint 5",
			typeId: 0,
			tasks: [
				{
					typeId: 3,
					start_time: 1488155400000,
					end_time: 1488168000000,
					id: 0,
				},
				{
					typeId: 4,
					start_time: 1488168000000,
					end_time: 1488189600000,
					id: 1,
				},
				{
					typeId: 0,
					start_time: 1488189600000,
					end_time: 1488200400000,
					id: 2,
				},
				{
					typeId: 1,
					start_time: 1488200400000,
					end_time: 1488225600000,
					id: 3,
				},
			],
		},
		{
			id: 4,
			title: "Touchpoint 6",
			typeId: 0,
			tasks: [
				{
					typeId: 1,
					start_time: 1488146400000,
					end_time: 1488178800000,
					id: 0,
				},
				{
					typeId: 4,
					start_time: 1488178800000,
					end_time: 1488200400000,
					id: 1,
				},
				{
					typeId: 0,
					start_time: 1488200400000,
					end_time: 1488214800000,
					id: 2,
				},
				{
					typeId: 5,
					start_time: 1488214800000,
					end_time: 1488225600000,
					id: 3,
				},
			],
		},
		{
			id: 5,
			title: "Touchpoint 7",
			typeId: 0,
			tasks: [],
		},
		{
			id: 6,
			title: "Terminal 3",
			typeId: 1,
			tasks: [
				{
					typeId: 6,
					start_time: 1488146400000,
					end_time: 1488207600000,
					id: 0,
				},
				{
					typeId: 7,
					start_time: 1488211200000,
					end_time: 1488232740000,
					id: 1,
				},
			],
		},
		{
			id: 7,
			title: "Terminal 4",
			typeId: 1,
			tasks: [
				{
					typeId: 6,
					start_time: 1488178800000,
					end_time: 1488222000000,
					id: 0,
				},
			],
		},
		{
			id: 8,
			title: "Terminal 9",
			typeId: 1,
			tasks: [
				{
					typeId: 6,
					start_time: 1488146400000,
					end_time: 1488189600000,
					id: 0,
				},
				{
					typeId: 7,
					start_time: 1488189600000,
					end_time: 1488196800000,
					id: 1,
				},
				{
					typeId: 6,
					start_time: 1488196800000,
					end_time: 1488232740000,
					id: 2,
				},
			],
		},
		{
			id: 9,
			title: "Terminal 12",
			typeId: 1,
			tasks: [
				{
					typeId: 6,
					start_time: 1488182400000,
					end_time: 1488225600000,
					id: 0,
				},
			],
		},
		{
			id: 10,
			title: "Terminal 13",
			typeId: 1,
			tasks: [],
		},
	],
}
