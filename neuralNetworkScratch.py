class myNN:
    def __init__(self):
        self.w1 = 1
        self.w2 = 1
        self.bias = 0
    
    def fit(self, X, y, epochs, loss_threshold):
        self.w1, self.w2, self.bias = self.gradient_descent(X['a'], X['b'], y, epochs, learning_rate, loss_threshold)

    def gradient_descent(self, a, b, y_true, epochs, learning_rate=0.5, loss_threshold):
        w1 = w2 = 1
        bias = 0
        n = len(age)

        for i in range(epochs):
            weighted_sum = a*w1 + b*w2 +bias
            y_predicted = sigmoid_numpy(weighted_sum)
            loss = log_loss(y_true, y_predicted)

            w1d = (1/n)*np.dot(np.transpose(a), (y_predicted-y_true))
            w2d = (1/n)*np.dot(np.transpose(bias), (y_predicted-y_true))

            bias_d = np.mean(y_predicted-y_true)
            w1 = w1 - learning_rate*w1d
            w2 = w2 - learning_rate*w2d
            bias = bias - learning_rate*bias_d

            print(f'Epoch:{i}, w1:{w1}, w2:{w2}, bias:{bias}, loss:{loss}')

            if loss<=loss_threshold:
                break


        return w1, w2, bias

    def predict(self, a, b):
        weighted_sum = self.w1*a + self.w2*b - self.bias
        y_predicted = sigmoid_numpy(weighted_sum)
        