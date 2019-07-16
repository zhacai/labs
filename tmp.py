from matplotlib import pyplot as plt
#%pylab inline


x = [1,2,3,4,5]
y = [num**2 for num in x]
plt.plot(x, y, color='green', marker='o', linestyle='solid')
plt.title('x**2')
plt.xlabel('x value')
plt.ylabel('y value')
plt.show()
plt.savefig('plot')
